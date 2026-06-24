// Styles
import styles from '../../styles/components/terms/Terms.module.scss';

export default function Terms() {
	return (
		<section>
			<div className={styles.terms}>
				<div className={styles.terms__header}>
					<h1 className={styles.terms__title}>Website Terms of Use</h1>
					<p className={styles.terms__effective_date}>
						NV Marketing, LLC &mdash; Effective Date: June 24, 2026
					</p>
				</div>

				{/* Section 1 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						1. Acceptance of These Terms
					</h2>
					<p className={styles.terms__text}>
						These Website Terms of Use (the &ldquo;Terms&rdquo;) govern your
						access to and use of the website located at www.nv-marketing.com
						and any related pages, content, and features (collectively, the
						&ldquo;Site&rdquo;), operated by NV Marketing, LLC (&ldquo;NV
						Marketing&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
						&ldquo;our&rdquo;). By accessing or using the Site, you agree to be
						bound by these Terms and by our Privacy Policy, which is incorporated
						here by reference. If you do not agree to these Terms, please do not
						use the Site.
					</p>
				</div>

				{/* Section 2 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						2. Relationship to Client Agreements
					</h2>
					<p className={styles.terms__text}>
						These Terms govern your use of the Site only. They do not govern the
						paid services we provide to clients. Our website design, website
						development, search engine optimization (SEO), and hosting services
						are provided under a separate Master Service Agreement and the
						related Terms of Service. If there is any conflict between these
						Terms and a signed Master Service Agreement regarding our services,
						the Master Service Agreement controls with respect to those services.
					</p>
				</div>

				{/* Section 3 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>3. Use of the Site</h2>
					<p className={styles.terms__text}>
						You may use the Site only for lawful purposes and in accordance with
						these Terms. You agree not to:
					</p>
					<ul className={styles.terms__list}>
						<li className={styles.terms__list_item}>
							Use the Site in any way that violates any applicable law or
							regulation;
						</li>
						<li className={styles.terms__list_item}>
							Attempt to gain unauthorized access to, interfere with, or disrupt
							the Site, its servers, or any connected systems or networks;
						</li>
						<li className={styles.terms__list_item}>
							Introduce any viruses, malware, or other harmful code, or use any
							robot, scraper, or automated means to access the Site without our
							permission;
						</li>
						<li className={styles.terms__list_item}>
							Copy, reproduce, republish, or resell any part of the Site except
							as expressly permitted by these Terms; or
						</li>
						<li className={styles.terms__list_item}>
							Use the Site to transmit unsolicited advertising, spam, or any
							unlawful, harassing, or fraudulent content.
						</li>
					</ul>
				</div>

				{/* Section 4 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						4. Intellectual Property
					</h2>
					<p className={styles.terms__text}>
						Unless otherwise indicated, all content on the Site &mdash; including
						text, graphics, logos, images, designs, layout, and code &mdash; is
						the property of NV Marketing, LLC or its licensors and is protected
						by copyright, trademark, and other intellectual property laws. You
						are granted a limited, non-exclusive, non-transferable license to
						access and view the Site for your personal or internal business use.
						No other use is permitted without our prior written consent. Nothing
						in these Terms transfers any ownership of intellectual property to
						you.
					</p>
				</div>

				{/* Section 5 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						5. Third-Party Links
					</h2>
					<p className={styles.terms__text}>
						The Site may contain links to third-party websites or resources that
						we do not own or control. We provide these links for convenience
						only and are not responsible for the content, products, services, or
						privacy practices of any third-party site. Your use of any
						third-party website is at your own risk and subject to that
						website&apos;s own terms and policies.
					</p>
				</div>

				{/* Section 6 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						6. Disclaimer of Warranties
					</h2>
					<p className={styles.terms__text}>
						The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
						available&rdquo; basis without warranties of any kind, whether
						express or implied, including but not limited to implied warranties
						of merchantability, fitness for a particular purpose, and
						non-infringement. We do not warrant that the Site will be
						uninterrupted, error-free, secure, or free of viruses or other
						harmful components, or that any information on the Site is accurate,
						complete, or current.
					</p>
				</div>

				{/* Section 7 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						7. No Guarantee of Results
					</h2>
					<p className={styles.terms__text}>
						Any general information provided on the Site is for informational
						purposes only and does not constitute a guarantee of any particular
						result. We cannot guarantee the results or effectiveness of any
						services described. Services, where engaged, are performed in a
						professional manner and in accordance with good industry practice;
						best efforts will be used, but no specific results are promised.
					</p>
				</div>

				{/* Section 8 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						8. Limitation of Liability
					</h2>
					<p className={styles.terms__text}>
						In no event shall NV Marketing, LLC be liable to you for any loss of
						profit, loss of business, loss of data, or for any indirect,
						incidental, consequential, special, or exemplary damages arising in
						connection with your use of, or inability to use, the Site (whether
						based on breach of contract, breach of warranty, negligence, or any
						other legal theory), even if we have been advised of the possibility
						of such damages. To the maximum extent permitted by law, our total
						aggregate liability arising out of or relating to your use of the
						Site shall not exceed one hundred U.S. dollars (US$100).
					</p>
				</div>

				{/* Section 9 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>9. Indemnification</h2>
					<p className={styles.terms__text}>
						You agree to indemnify, defend, and hold harmless NV Marketing, LLC
						and its members, officers, employees, and agents from and against
						any claims, liabilities, damages, losses, and expenses (including
						reasonable attorneys&apos; fees) arising out of or related to your
						misuse of the Site or your violation of these Terms.
					</p>
				</div>

				{/* Section 10 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>10. Privacy</h2>
					<p className={styles.terms__text}>
						Your use of the Site is also governed by our Privacy Policy, which
						explains how we collect, use, and protect your information. Please
						review it at{' '}
						<a
							href='/privacy'
							className={styles.terms__link}
						>
							www.nv-marketing.com/privacy
						</a>
						.
					</p>
				</div>

				{/* Section 11 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						11. Changes to These Terms
					</h2>
					<p className={styles.terms__text}>
						We may revise these Terms from time to time at our sole discretion.
						The &ldquo;Effective Date&rdquo; above indicates when these Terms
						were last updated. Changes are effective when posted to the Site.
						Your continued use of the Site after any change constitutes your
						acceptance of the revised Terms.
					</p>
				</div>

				{/* Section 12 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>
						12. Governing Law
					</h2>
					<p className={styles.terms__text}>
						These Terms shall be governed by and construed in accordance with
						the laws of the State of Utah, without regard to its
						conflict-of-laws principles. Any dispute arising out of or relating
						to these Terms or the Site shall be subject to the exclusive
						jurisdiction of the state and federal courts located in Utah.
					</p>
				</div>

				{/* Section 13 */}
				<div className={styles.terms__section}>
					<h2 className={styles.terms__section_title}>13. Contact Us</h2>
					<p className={styles.terms__text}>
						If you have any questions about these Terms, please contact us at{' '}
						<a
							href='mailto:contact@nv-marketing.com'
							className={styles.terms__link}
						>
							contact@nv-marketing.com
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
