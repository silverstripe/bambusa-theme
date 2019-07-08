<div class="container">
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
      <% include SilverStripe\\Blog\\BlogSideBar BlogPage=$Me %>
    </div>
</div>

<% include PageUtilities %>
