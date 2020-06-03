import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="About" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					I'm currently looking for a full-time developer role with the right company.
	                                My inbox is always open, whether for freelance opportunities or just a potential project.
	                                I'll reply ASAP.
	     
	                                For more details, download my resume as a PDF, or
					check out some of my code on GitHub!
				</p>
				<p>
					<Link to="/JEFFUBAYIRESUME.pdf" external button>
						Download Resume
					</Link>
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
					</Resume>
	</Layout>
)

export default ResumePage
