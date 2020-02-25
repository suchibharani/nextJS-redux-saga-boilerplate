/*********************************************************
  * File name: _document.js
  * Author:  Suchitra
  * Description :  It helps to put up all static files and meta tags
*********************************************************/
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import stylesheet from '../static/scss/styles.scss'

// Import Asset Config
import getConfig from 'next/config';
import {assetConfig} from '../constants/assetConfig.js';
const {publicRuntimeConfig} = getConfig()
const {siteEnv} = publicRuntimeConfig;
let assetVal = assetConfig[siteEnv];


let date = new Date();
let timestamp = date.getTime();

// from https://github.com/zeit/next.js/edit/canary/examples/with-react-helmet/pages/_document.js
export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
    )
  }

  render () {
    let customCss = assetVal.PREFIX+"/static/css/custom.css?v="+timestamp
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {/* { this.helmetJsx } */}
          {/* { this.helmetHeadComponents } */}
          <link rel="shortcut icon" type="image/png" href=""/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href={assetVal.PREFIX+"/static/css/base.css"}/>
          <link rel="stylesheet" href={customCss} />
          <meta name="robots" content="noindex" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <script src={assetVal.PREFIX+"/static/js/jquery.min.js"}></script>          
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
        <style jsx>{stylesheet}</style>
      </html>
    )
  }
}
