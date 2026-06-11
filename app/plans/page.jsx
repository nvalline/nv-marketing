// Components
import { BillingProvider } from '../components/plans/BillingContext';
import BillingToggle from '../components/plans/BillingToggle';
import PricingCta from '../components/plans/PricingCta';
import PricingFootnotes from '../components/plans/PricingFootnotes';
import PricingHero from '../components/plans/PricingHero';
import PricingHowItWorks from '../components/plans/PricingHowItWorks';
import PricingTestimonials from '../components/plans/PricingTestimonials';
import PlansFAQ from '../components/plans/PlansFAQ';
import PricingTiers from '../components/plans/PricingTiers';
import TrustBar from '../components/plans/TrustBar';
import FullLinesLower from '../components/misc/FullLinesLower';
import FullLinesUpper from '../components/misc/FullLinesUpper';
import LeftLines from '../components/misc/LeftLines';
import RightLines from '../components/misc/RightLines';

export const metadata = {
	title: 'Plans',
	description:
		'Transparent website plans for small businesses in the Intermountain West. Enterprise-quality design and development at a small-business price.',
	alternates: {
		canonical: '/plans'
	}
};

export default function Plans() {
	return (
		<main>
			<div className='container'>
				<PricingHero />
				<TrustBar />
				<div className='leftAccentLines'>
					<LeftLines />
				</div>
				<BillingProvider>
					<BillingToggle />
					<PricingTiers />
				</BillingProvider>
				<PricingFootnotes />
				<div className='rightAccentBlock'>
					<div className='rightAccentLines'>
						<RightLines />
					</div>
				</div>
				<PricingHowItWorks />
				<PricingTestimonials />
				<PlansFAQ />
				<div className='fullAccentLines'>
					<FullLinesUpper />
				</div>
				<PricingCta />
				<div className='fullAccentLines'>
					<FullLinesLower />
				</div>
			</div>
		</main>
	);
}
