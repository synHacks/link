import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import logo from '../public/synHacks.png';

export default function Home() {
	const links: { name: string; url: string; description?: string }[] = [
		{
			name: 'Hack the World',
			url: 'https://hacktheworld.synhacks.org',
			description: 'The virtual world-wide hackathon held in 2020',
		},
		{
			name: 'Visit our website',
			url: 'https://synhacks.org',
			description: 'Discover our initiatives',
		},
	];

	return (
		<div className={styles.container}>
			<Head>
				<title>synHacks</title>
				<meta name='description' content="synHack's Link Tree" />
				<link rel='icon' href='/favicon.png' />
			</Head>

			<main className={styles.main}>
				<div style={{ width: '70vw' }}>
					<Image
						src={logo}
						alt='synHacks Logo'
						style={{ objectFit: 'contain', width: '100%' }}
					/>
				</div>

				<div className={styles.grid}>
					{links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.card}
						>
							<h2>{link.name}</h2>
							{link.description && <p>{link.description}</p>}
						</a>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://synhacks.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					synHacks
				</a>
				<p
					style={{
						textAlign: 'center',
						maxWidth: '70vw',
						color: 'grey',
						fontSize: '0.8rem',
					}}
				>
					Empower passionate youths to tackle current global issues through
					computer science by providing industry mentorships and inspiring
					hackathon experiences.
				</p>
			</footer>
		</div>
	);
}
