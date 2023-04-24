import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import {
  Header,
  Hero,
  About,
  WorkExperience,
  Skills,
  Projects,
  ContactMe
} from '../components'
import Link from 'next/link'
import { experience, pageInfo, project, skill, social } from './api/api.type.ts'
import { fetchPageInfo } from '../utils/api/fetchPageInfo.ts'
import { fetchProject } from '@/utils/api/fetchProjects.ts'
import { fetchExperience } from '@/utils/api/fetchExperiences.ts'
import { fetchSkill } from '@/utils/api/fetchSkills.ts'
import { fetchSocial } from '@/utils/api/fetchSocial.ts'

type Props = {
  pageInfo: pageInfo
  experiences: experience[]
  projects: project[]
  skills: skill[]
  social: social
}

const Home = ({ pageInfo, experiences, social, skills, projects }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Daniel's - Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='img/topArrow.png'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: pageInfo = await fetchPageInfo()
  const projects: project[] = await fetchProject()
  const experiences: experience[] = await fetchExperience()
  const skills: skill[] = await fetchSkill()
  const social: social = await fetchSocial()

  return {
    props: {
      pageInfo,
      projects,
      experiences,
      skills,
      social
    },
    revalidate: 10
  }
}
