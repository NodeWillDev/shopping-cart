import Prisma from "../../../prisma/PrismaClient";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default async function (request: NextRequest, response: NextApiResponse) {  

  const courses = await Prisma.course.findMany();

  return response.status(200).json({
    courses,
    success: true
  })
}