export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: March 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using SportStore, you accept and agree to be bound by the terms and provisions of this
                agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of
                others. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Collect or harvest any information from the website without permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Product Reviews and Recommendations</h2>
              <p className="text-muted-foreground leading-relaxed">
                All product reviews and recommendations on SportStore are based on our honest opinions and testing.
                However, individual results may vary. We are not responsible for any decisions made based on our
                reviews. Always conduct your own research before making a purchase.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Affiliate Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains affiliate links to Amazon and other retailers. When you click these links and make
                a purchase, we may earn a commission at no additional cost to you. This helps support our website and
                allows us to continue providing quality content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on SportStore, including text, images, logos, and graphics, is the property of SportStore or
                its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and content are provided "as is" without any warranties, express or implied. We do not
                guarantee that the website will be error-free or uninterrupted, or that defects will be corrected.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                SportStore shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the website or any products purchased through affiliate
                links.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website after changes are posted constitutes your
                acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at support@sportstore.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
