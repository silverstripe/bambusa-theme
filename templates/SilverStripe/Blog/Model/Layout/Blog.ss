<div class="container">
    <% include SilverStripe\\Bambusa\\Pages\\PageHeader %>
    <div class="row">
        <section class="col-lg-8">
            <div class="blog-main" role="main">
                <div class="clearfix blog-holder__content">
                      $Content
                </div>

              <% include BlogPostPaginatedList %>

              $Form
              <% include RelatedPages %>
              $CommentsForm
            </div>
        </section>
        <aside class="col-lg-3 offset-lg-1">
          <% include SilverStripe\\Blog\\BlogSideBar BlogPage=$Me %>
        </aside>
    </div>
</div>

<% include PageUtilities %>
