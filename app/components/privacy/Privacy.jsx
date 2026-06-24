// Styles
import styles from '../../styles/components/privacy/Privacy.module.scss';

export default function Privacy() {
	return (
		<section>
			<div className={styles.privacy}>
				<div className={styles.privacy__header}>
					<h1 className={styles.privacy__title}>Privacy Policy</h1>
					<p className={styles.privacy__effective_date}>
						NV Marketing, LLC &mdash; Effective Date: June 24, 2026
					</p>
				</div>

				{/* Section 1 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>1. Introduction</h2>
					<p className={styles.privacy__text}>
						NV Marketing, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
						&ldquo;our&rdquo;) respects your privacy. This Privacy Policy
						explains how we collect, use, disclose, and protect information when
						you visit our website at www.nv-marketing.com (the
						&ldquo;Site&rdquo;), contact us, or sign up to receive
						communications from us. By using the Site, you agree to the
						practices described in this Policy.
					</p>
				</div>

				{/* Section 2 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						2. Information We Collect
					</h2>
					<p className={styles.privacy__sub_title}>
						Information you provide to us.
					</p>
					<p className={styles.privacy__text}>
						When you submit our contact or intake form, or otherwise communicate
						with us, we may collect your name, email address, telephone number,
						company or business name, and any information you choose to include
						in your message or project description.
					</p>
					<p className={styles.privacy__sub_title}>
						Information collected automatically.
					</p>
					<p className={styles.privacy__text}>
						When you visit the Site, we and our analytics providers automatically
						collect certain technical information, such as your IP address,
						browser type, device type, operating system, referring pages, the
						pages you view, and the dates and times of your visits. This
						information is collected through cookies and similar technologies
						(see Section 4).
					</p>
					<p className={styles.privacy__sub_title}>
						Email marketing information.
					</p>
					<p className={styles.privacy__text}>
						If you sign up for our newsletter or marketing communications, we
						collect your email address and any preferences you provide so that we
						can send you those communications.
					</p>
				</div>

				{/* Section 3 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						3. How We Use Your Information
					</h2>
					<p className={styles.privacy__text}>
						We use the information we collect to:
					</p>
					<ul className={styles.privacy__list}>
						<li className={styles.privacy__list_item}>
							Respond to your inquiries and provide the information or services
							you request;
						</li>
						<li className={styles.privacy__list_item}>
							Operate, maintain, analyze, and improve the Site and our services;
						</li>
						<li className={styles.privacy__list_item}>
							Send you marketing or promotional communications where you have
							signed up to receive them;
						</li>
						<li className={styles.privacy__list_item}>
							Understand how visitors use the Site through analytics; and
						</li>
						<li className={styles.privacy__list_item}>
							Comply with legal obligations and protect our rights, property, and
							safety, and those of others.
						</li>
					</ul>
				</div>

				{/* Section 4 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						4. Cookies and Analytics
					</h2>
					<p className={styles.privacy__text}>
						We use cookies and similar technologies to operate the Site and to
						understand how it is used. A cookie is a small text file stored on
						your device. We use analytics services, such as Google Analytics,
						which use cookies to help us analyze Site traffic and usage. You can
						set your browser to refuse or delete cookies, though some features of
						the Site may not function properly as a result. You may also opt out
						of Google Analytics by installing the Google Analytics Opt-out
						Browser Add-on.
					</p>
				</div>

				{/* Section 5 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						5. How We Share Information
					</h2>
					<p className={styles.privacy__text}>
						We do not sell your personal information. We may share information in
						the following limited circumstances:
					</p>
					<ul className={styles.privacy__list}>
						<li className={styles.privacy__list_item}>
							<strong>Service providers:</strong> with third-party vendors who
							perform services on our behalf, such as website hosting, analytics,
							and email marketing providers, who are permitted to use the
							information only to provide those services to us;
						</li>
						<li className={styles.privacy__list_item}>
							<strong>Legal compliance:</strong> when required to do so by law,
							regulation, legal process, or governmental request, or to protect
							our rights, property, or safety, or that of others; and
						</li>
						<li className={styles.privacy__list_item}>
							<strong>Business transfers:</strong> in connection with a merger,
							acquisition, financing, or sale of all or a portion of our
							business.
						</li>
					</ul>
				</div>

				{/* Section 6 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>6. Your Choices</h2>
					<p className={styles.privacy__text}>
						You may opt out of marketing emails at any time by clicking the
						&ldquo;unsubscribe&rdquo; link in any such email or by contacting
						us. You may also control cookies through your browser settings as
						described in Section 4. If you would like us to update or delete
						information you have provided, please contact us using the details
						below.
					</p>
				</div>

				{/* Section 7 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>7. Data Retention</h2>
					<p className={styles.privacy__text}>
						We retain personal information for as long as necessary to fulfill
						the purposes described in this Policy, including to respond to your
						inquiries, provide our services, comply with our legal obligations,
						resolve disputes, and enforce our agreements, after which we will
						delete or de-identify it.
					</p>
				</div>

				{/* Section 8 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>8. Data Security</h2>
					<p className={styles.privacy__text}>
						We use reasonable administrative, technical, and physical safeguards
						designed to protect the information we collect. However, no method of
						transmission over the Internet or method of electronic storage is
						completely secure, and we cannot guarantee absolute security.
					</p>
				</div>

				{/* Section 9 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						9. Your California Privacy Rights
					</h2>
					<p className={styles.privacy__text}>
						If you are a California resident, the California Consumer Privacy
						Act, as amended by the California Privacy Rights Act
						(&ldquo;CCPA/CPRA&rdquo;), provides you with the following rights
						regarding your personal information:
					</p>
					<ul className={styles.privacy__list}>
						<li className={styles.privacy__list_item}>
							The right to know what personal information we collect, use, and
							disclose about you;
						</li>
						<li className={styles.privacy__list_item}>
							The right to request deletion of your personal information, subject
							to certain exceptions;
						</li>
						<li className={styles.privacy__list_item}>
							The right to correct inaccurate personal information;
						</li>
						<li className={styles.privacy__list_item}>
							The right to opt out of the &ldquo;sale&rdquo; or
							&ldquo;sharing&rdquo; of your personal information &mdash; note
							that we do not sell or share your personal information as those
							terms are defined under the CCPA/CPRA; and
						</li>
						<li className={styles.privacy__list_item}>
							The right not to receive discriminatory treatment for exercising
							any of these rights.
						</li>
					</ul>
					<p className={styles.privacy__text} style={{ marginTop: '0.75rem' }}>
						To exercise any of these rights, please contact us at{' '}
						<a
							href='mailto:contact@nv-marketing.com'
							className={styles.privacy__link}
						>
							contact@nv-marketing.com
						</a>
						. We will verify your request and respond as required by law. You may
						use an authorized agent to submit a request on your behalf, subject
						to verification.
					</p>
				</div>

				{/* Section 10 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						10. Children&apos;s Privacy
					</h2>
					<p className={styles.privacy__text}>
						The Site is not directed to children under the age of 13, and we do
						not knowingly collect personal information from children under 13. If
						you believe a child has provided us with personal information, please
						contact us and we will take steps to delete it.
					</p>
				</div>

				{/* Section 11 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						11. Third-Party Links
					</h2>
					<p className={styles.privacy__text}>
						The Site may contain links to third-party websites. We are not
						responsible for the privacy practices or content of those websites.
						We encourage you to review the privacy policies of any third-party
						sites you visit.
					</p>
				</div>

				{/* Section 12 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>
						12. Changes to This Privacy Policy
					</h2>
					<p className={styles.privacy__text}>
						We may update this Privacy Policy from time to time. The
						&ldquo;Effective Date&rdquo; above indicates when it was last
						revised. Changes are effective when posted to the Site. Your
						continued use of the Site after any change constitutes your
						acceptance of the updated Policy.
					</p>
				</div>

				{/* Section 13 */}
				<div className={styles.privacy__section}>
					<h2 className={styles.privacy__section_title}>13. Contact Us</h2>
					<p className={styles.privacy__text}>
						If you have any questions or requests regarding this Privacy Policy
						or our privacy practices, please contact us at{' '}
						<a
							href='mailto:contact@nv-marketing.com'
							className={styles.privacy__link}
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
