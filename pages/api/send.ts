import type { NextApiResponse, NextApiRequest } from "next";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";


const resend = new Resend("re_8jT35nKU_Jbvy8p5wwQdqsfN9tPBKCkZX");

interface IResendRequest extends NextApiRequest {
    body: {
    subject: string;
    firstName: string;
    text: string;
  }
}

export default async function POST(req: IResendRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const body = req.body;
        console.log(body);

        const { data, error } = await resend.emails.send({
        from: "🔔⚠️ Solicitud por Portafolio <onboarding@resend.dev>",
        to: ["josuealbertomorenoguzman@gmail.com"],
        subject: body.subject,
        react: EmailTemplate({ firstName: body.firstName, text: body.text,  }),
        text: body.text,
      });
    
      if (error) {
        console.log(error)
        return res.status(500).json({ error: error });
      }
    
      return res.status(200).json({ data: data });
    }
    /* return NextResponse.json({ data: data }); */  
}
