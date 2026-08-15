import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "جميع الحقول مطلوبة" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "el7awy277@gmail.com",
      subject: `رسالة جديدة: ${subject}`,
      html: `
        <div dir="rtl">
          <h2>رسالة جديدة من الموقع</h2>

          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد:</strong> ${email}</p>
          <p><strong>الموضوع:</strong> ${subject}</p>

          <hr />

          <h3>الرسالة:</h3>
          <p>${message}</p>
        </div>
      `,
    });

    console.log("RESEND:", { data, error });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "تم إرسال الرسالة بنجاح",
      data,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json({ message: "حدث خطأ غير متوقع" }, { status: 500 });
  }
}
