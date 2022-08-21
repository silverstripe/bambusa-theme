<% cached 'SocialLinks', $SiteConfig.LastEdited, $CurrentLocale %>
    <div class="social-bar">
        <% if $SiteConfig.FacebookPage %>
            <a id="social-facebook-link" class="btn btn__social" aria-label="Facebook page" target="_blank" href="$SiteConfig.FacebookPage">
                <% include Includes/Icons/Facebook %>
            </a>
        <% end_if %>
        <% if $SiteConfig.TwitterPage %>
            <a id="social-twitter-link" class="btn btn__social" aria-label="Twitter page" target="_blank" href="$SiteConfig.TwitterPage">
                <% include Includes/Icons/Twitter %>
            </a>
        <% end_if %>
        <% if $SiteConfig.InstagramPage %>
            <a id="social-instagram-link" class="btn btn__social" aria-label="Instagram page" target="_blank" href="$SiteConfig.InstagramPage">
                <% include Includes/Icons/Instagram %>
            </a>
        <% end_if %>
        <% if $SiteConfig.LinkedInPage %>
            <a id="social-linkedin-link" class="btn btn__social" aria-label="LinkedIN page" target="_blank" href="$SiteConfig.LinkedInPage">
                <% include Includes/Icons/Linkedin %>
            </a>
        <% end_if %>
    </div>
<% end_cached %>
