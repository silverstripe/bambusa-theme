<div class="container">
    <div class="row">
        <section class="<% if $Children %>col-lg-12<% else %>col-lg-8 offset-lg-2<% end_if %>">
            <header class="page-header">
                $Breadcrumbs
                <h1>$Title</h1>
            </header>
        </section>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="pathfinder">
                $Pathfinder
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            $Content
        </div>
    </div>
</div>
