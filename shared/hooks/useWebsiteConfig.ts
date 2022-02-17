import siteConfig from '../../websiteConfig.json';

type SiteConfigProps = {
  title: string;
  description: string;
  url: string;
  appName: string;
};

let hostname = '';
if (typeof window !== 'undefined') {
  hostname = window.location.origin;
}

const useWebsiteConfig = (): SiteConfigProps => {
  return {
    ...siteConfig,
    url: hostname,
  };
};

export default useWebsiteConfig;
