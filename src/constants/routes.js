export default {
  home: {
    id: 'home',
    title: 'Home',
    href: '#home',
    load: require('bundle?lazy&name=home!../components/Home')
  },
  about: {
    id: 'about',
    title: 'About',
    href: '#about',
    load: require('bundle?lazy&name=about!../components/About')
  },
  contact: {
    id: 'contact',
    title: 'Contact Us',
    href: '#contact',
    load: require('bundle?lazy&name=contact!../components/Contact')
  }
}