import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<div id="foreground" className="flex">
				{/* Left side */}
				<div>
					<h1>Stay updated!</h1>
					<p>Join 60,000+ product managers receiving monthly updates on:</p>
					<ul>
						<li>Product discovery and building what matters</li>
						<li>Measuring to ensure updates are a success</li>
						<li>And much more!</li>
					</ul>
					<form action="submit" className="flex flex-col">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="email@company.com"
						/>
						<button type="submit">Subscribe to monthly newsletter</button>
					</form>
				</div>
				{/* right side */}
				<div>
					<Image
						src="/assets/images/illustration-sign-up-desktop.svg"
						width={500}
						height={500}
						alt="Picture of the author"
					/>
				</div>
			</div>
		</main>
	)
}
