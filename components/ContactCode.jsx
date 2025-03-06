import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'kodlooper.com',
    href: 'https://kodlooper.com',
  },
  {
    social: 'email',
    link: 'kodlooper@gmail.com',
    href: 'mailto:kodlooper@gmail.com',
  },
  {
    social: 'github',
    link: 'beytullahk54',
    href: 'https://github.com/beytullahk54',
  },
  {
    social: 'linkedin',
    link: 'beytullahk54',
    href: 'https://www.linkedin.com/in/beytullahk54/',
  },
  {
    social: 'twitter',
    link: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  {
    social: 'instagram',
    link: 'beytullahk54',
    href: 'https://www.instagram.com/beytullahk54',
  },
  /*{
    social: 'polywork',
    link: 'nitinranganath',
    href: 'https://www.polywork.com/nitinranganath',
  },
  {
    social: 'telegram',
    link: 'iamnitinr',
    href: 'https://t.me/iamnitinr',
  },
  {
    social: 'codepen',
    link: 'nitinranganath',
    href: 'https://codepen.io/itsnitinr',
  },
  {
    social: 'codesandbox',
    link: 'itsnitinr',
    href: 'https://codesandbox.io/u/itsnitinr',
  },*/
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
