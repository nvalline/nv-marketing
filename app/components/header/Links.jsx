import Link from 'next/link';

export default function Links({ divClass, ulClass, liClass, btnClass }) {
	return (
		<div className={divClass}>
			<ul className={ulClass}>
				<li className={liClass}>
					<Link href='/'>Home</Link>
				</li>
				<li className={liClass}>
					<Link href='/about'>About</Link>
				</li>
				<li className={liClass}>
					<Link href='/services'>Services</Link>
				</li>
				<li className={liClass}>
					<Link href='/blog'>Blog</Link>
				</li>
			</ul>
			<Link href='/contact'>
				<button type='button' className={btnClass}>
					Contact
				</button>
			</Link>
		</div>
	);
}
