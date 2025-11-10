import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WelcomeEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "1Health Essentials <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to 1Health Essentials VIP Community! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to 1Health Essentials</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header with gradient -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #9333ea 0%, #db2777 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                          🎉 Welcome to 1Health Essentials!
                        </h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                          Hi there! 👋
                        </p>
                        
                        <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                          Thank you for joining our VIP Community! We're thrilled to have you with us.
                        </p>
                        
                        <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                          Here's your exclusive <strong style="color: #9333ea;">20% discount code</strong>:
                        </p>
                        
                        <div style="background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%); border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
                          <p style="margin: 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">
                            Your Discount Code
                          </p>
                          <p style="margin: 10px 0 0; font-size: 32px; font-weight: bold; color: #9333ea; letter-spacing: 2px;">
                            VIP20OFF
                          </p>
                        </div>
                        
                        <div style="background-color: #f9fafb; border-left: 4px solid #9333ea; padding: 20px; margin: 30px 0; border-radius: 4px;">
                          <p style="margin: 0 0 15px; color: #1f2937; font-weight: 600; font-size: 16px;">
                            ✨ As a VIP member, you get:
                          </p>
                          <ul style="margin: 0; padding-left: 20px; color: #374151; font-size: 15px; line-height: 1.8;">
                            <li>Early access to new products</li>
                            <li>Exclusive deals and bundles</li>
                            <li>Priority customer support</li>
                            <li>First to know about promotions</li>
                          </ul>
                        </div>
                        
                        <p style="margin: 30px 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                          <strong>📍 Visit us at:</strong><br>
                          1Health Essentials<br>
                          Brentwood Arcade, Thindiqua, Kiambu
                        </p>
                        
                        <p style="margin: 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                          <strong>🚀 Coming Soon:</strong><br>
                          Our official website and blog are launching soon! Stay tuned for beauty tips, wellness advice, and product guides.
                        </p>
                        
                        <div style="text-align: center; margin: 40px 0;">
                          <a href="https://wa.me/254735558830?text=Hello!%20I%27m%20a%20VIP%20member" style="display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #db2777 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                            Contact Us on WhatsApp
                          </a>
                        </div>
                        
                        <p style="margin: 20px 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                          Thank you for choosing 1Health Essentials. We can't wait to serve you!
                        </p>
                        
                        <p style="margin: 10px 0 0; color: #6b7280; font-size: 14px;">
                          Best regards,<br>
                          <strong style="color: #9333ea;">The 1Health Essentials Team</strong>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0 0 10px; color: #6b7280; font-size: 12px;">
                          © ${new Date().getFullYear()} 1Health Essentials. All rights reserved.
                        </p>
                        <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                          You're receiving this because you subscribed to our newsletter.
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
