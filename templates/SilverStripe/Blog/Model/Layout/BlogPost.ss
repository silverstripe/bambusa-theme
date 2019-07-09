<div class="blog-entry container">
    <div class="row">
        <div class="col-lg-12">
            <header class="page-header">
              $Breadcrumbs
                <h1>$Title</h1>
            </header>
        </div>
    </div>

    <div class="row">
        <section class="col-lg-8">
            <article class="blog-post-article">
              <% if $FeaturedImage %>
                  <p class="post-image">$FeaturedImage.ScaleWidth(795)</p>
              <% end_if %>

                <div class="content">
                      $Content
                </div>

              <% include SilverStripe\\Blog\\EntryMeta %>

              $Form
              $CommentsForm
            </article>
        </section>
        <aside class="col-lg-3 offset-lg-1">
          <% include SilverStripe\\Blog\\BlogSideBar BlogPage=$Parent %>
        </aside>
    </div>
</div>
<% include PageUtilities %>
