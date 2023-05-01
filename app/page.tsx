import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'>
        <Image alt='andrasat' src='/images/andrasat_icon.png' width={200} height={200} />
        <h1 className='text-4xl font-bold'>andrasat</h1>
        <h2 className='text-2xl font-bold'>Software Engineer</h2>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-2xl font-bold'>Contact</h3>

        <div className='flex flex-row items-center justify-center w-10 h-10 mt-2'>
          <a href='https://www.linkedin.com/in/andrasat/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} height={40} width={40} />
          </a>

          <a href='https://github.com/andrasat' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} height={40} width={40} />
          </a>
        </div>
      </div>
    </main>
  );
}
