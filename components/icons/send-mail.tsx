import { EnvelopeIcon } from '@heroicons/react/24/solid';

const SendMail = ({ size }: SendMailProps) => {
  return (
    <a href="mailto:kaylesj4@gmail.com" aria-label="Send mail">
      <EnvelopeIcon
        className={`${
          size === 'large' ? 'md:w-16 md:h-16 md:p-5' : ''
        } w-12 h-12 p-3 text-white bg-green-spotify rounded-full hover:scale-107 transition duration-200`}
      />
    </a>
  );
};

const defaultProps = {
  size: 'base',
};

type SendMailProps = {
  size?: 'base' | 'large';
};

SendMail.defaultProps = defaultProps;

export default SendMail;
