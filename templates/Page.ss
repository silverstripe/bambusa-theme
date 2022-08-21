<!doctype html>
<html class="no-js" lang="$ContentLocale">
    <head>
        <% base_tag %>
        <title><% if $MetaTitle %>$MetaTitle.XML<% else %>$Title.XML<% end_if %> | $SiteConfig.Title.XML</title>
        $MetaTags(false)
        <meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,initial-scale=1.0" />
        <% if $RSSLink %>
        <link rel='alternate' type='application/rss+xml' title='RSS' href='$RSSLink'>
        <% end_if %>
        <% require themedCss('dist/css/main.css') %>
        <% include Favicon %>
        <style>
            @font-face {
                font-family: 'Metropolis';
                font-style: normal;
                font-weight: normal;
                src: local('Metropolis'), url('$resourceURL(themes/bambusa/dist/fonts/Metropolis-Regular.woff)') format('woff'), url('$resourceURL(themes/bambusa/dist/fonts/Metropolis-Regular.woff)') format('woff2');
            }
            @font-face {
                font-family: 'Metropolis';
                font-style: normal;
                font-weight: bold;
                src: local('Metropolis'), url('$resourceURL(themes/bambusa/dist/fonts/Metropolis-SemiBold.woff)') format('woff'), url('$resourceURL(themes/bambusa/dist/fonts/Metropolis-SemiBold.woff2)') format('woff2');
            }
        </style>
    </head>
    <body class="$ClassName
        <% if $SiteConfig.MainFontFamily %>theme-font-{$SiteConfig.MainFontFamily}<% end_if %>
        <% if $SiteConfig.HeaderBackground %>theme-header-{$SiteConfig.HeaderBackground}<% end_if %>
        <% if $SiteConfig.NavigationBarBackground %>theme-nav-{$SiteConfig.NavigationBarBackground}<% end_if %>
        <% if $SiteConfig.CarouselBackground %>theme-carousel-{$SiteConfig.CarouselBackground}<% end_if %>
        <% if $SiteConfig.FooterBackground %>theme-footer-{$SiteConfig.FooterBackground}<% end_if %>
        <% if $SiteConfig.AccentColor %>theme-accent-{$SiteConfig.AccentColor}<% end_if %>
        <% if $SiteConfig.TextLinkColor %>theme-link-{$SiteConfig.TextLinkColor}<% end_if %>
        <% if $SiteConfig.BannerBlockBackground %>theme-banner-block-{$SiteConfig.BannerBlockBackground}<% end_if %>">

        <header class="header" role="banner">
            <% include SiteBanners %>
            <% include Header %>
            <% include MainNav %>
        </header>
        <main id="main" class="main" role="main">
            <a id="top" tabindex="-1"></a>
            $Layout
            <% include PageUtilities %>
        </main>
        <% include PageShowcase %>
        <footer class="footer-site" role="contentinfo">
            <% include Footer %>
        </footer>

        $ModalWindow

        <% require javascript('themes/starter/dist/js/main.js') %>
        <% require javascript('themes/bambusa/dist/js/main.js') %>
        <% include GoogleAnalytics %>
    </body>
</html>
