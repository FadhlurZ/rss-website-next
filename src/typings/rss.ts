
export interface RSSFeed {
    "?xml": Xml;
    rss: Rss;
  }
  
  export interface Xml {
    _version: string;
    _encoding: string;
  }
  
  export interface Rss {
    channel: Channel;
    "_xmlns:itunes": string;
    "_xmlns:dcterms": string;
    _version: string;
  }
  
  export interface Channel {
    title: string;
    link: string;
    description: string;
    language: string;
    copyright: string;
    pubDate: string;
    webMaster: string;
    item: Article[];
  }
  
  export interface Article {
    title: string;
    link: string;
    description: string;
    enclosure: Enclosure;
    pubDate: string;
    guid: Guid;
  }
  
  export interface Enclosure {
    _type: string;
    _url: string;
  }
  
  export interface Guid {
    "#text": string;
    _isPermaLink: string;
  }