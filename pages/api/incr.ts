import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

let redis: Redis | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = Redis.fromEnv();
  }
} catch (error) {
  console.log("Redis not configured, view tracking disabled");
}

export const config = {
  runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ("slug" in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }
  
  // If Redis is not configured, return success without tracking
  if (!redis) {
    return new NextResponse(null, { status: 202 });
  }

  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip");
  if (ip) {
    try {
      // Hash the IP in order to not store it directly in your db.
      const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(ip),
      );
      const hash = Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      // deduplicate the ip for each slug
      const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
        nx: true,
        ex: 24 * 60 * 60,
      });
      if (!isNew) {
        return new NextResponse(null, { status: 202 });
      }
    } catch (error) {
      console.error("Redis deduplication failed:", error);
      // Continue to increment even if deduplication fails
    }
  }
  
  try {
    await redis.incr(["pageviews", "projects", slug].join(":"));
  } catch (error) {
    console.error("Redis increment failed:", error);
  }
  
  return new NextResponse(null, { status: 202 });
}
