<nav role="navigation" class="page-sidebar-widget page-sidebar-nav">
  <p class="text-center"><a title="<%t Bambusa.RSS "Subscribe to RSS" %>" href="$BlogPage.Link('rss')"><%t Bambusa.RSS "Subscribe to RSS" %></a></p>
  <% if $BlogPage.Categories %>
      <h3 class="h4 page-sidebar-header"><%t Bambusa.CATEGORIES "Browse by category" %></h3>
      <ul class="list-unstyled">
        <% loop $BlogPage.Categories %>
            <li class="<% if $Up.BlogPage.CurrentCategory.ID == $ID %>current<% end_if %>">
                <a title="<%t Bambusa.GOTOCATEGORY 'Go to the &quot;{category}&quot; category' category=$Title %>" href="$Link" class="<% if $Up.BlogPage.CurrentCategory.ID == $ID %>current<% end_if %>">$Title</a>
            </li>
        <% end_loop %>
      </ul>
  <% end_if %>
  <% if $BlogPage.Tags %>
      <h3 class="h4 page-sidebar-header"><%t Bambusa.TAGS "Browse by tag" %></h3>
      <ul class="list-unstyled tags-list">
        <% loop $BlogPage.Tags %>
            <li class="tags-list__tag-item <% if $Up.BlogPage.CurrentTag.ID == $ID %>current<% end_if %>">
                <a title="<%t Bambusa.GOTOTAG 'Go to the &quot;{tag}&quot; tag' tag=$Title %>" href="$Link" class="tags-list__tag-link <% if $Up.BlogPage.CurrentTag.ID == $ID %>tags-list__tag-link--current<% end_if %>">$Title</a>
            </li>
        <% end_loop %>

      </ul>
  <% end_if %>

</nav>
