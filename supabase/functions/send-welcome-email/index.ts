const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WelcomeEmailRequest = await req.json();

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "One Health Essentials <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to One Health Essentials Daily Deals!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #9333ea; text-align: center;">Welcome to One Health Essentials!</h1>
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to our daily deals! 🎉
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Get ready to discover amazing Black Friday deals on premium beauty and wellness products 
              delivered straight to your inbox every day at midnight Eastern Time.
            </p>
            <div style="background: linear-gradient(135deg, #9333ea, #ec4899); padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: white; text-align: center; margin: 0;">Today's Exclusive Deals</h2>
              <p style="color: white; text-align: center; margin: 10px 0;">Save up to 71% on selected bundles!</p>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              The One Health Essentials Team
            </p>
          </div>
        `,
      }),
    });

    const data = await emailResponse.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
