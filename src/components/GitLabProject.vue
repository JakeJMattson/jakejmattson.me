<template>
    <div class="col-12 col-md-6 col-lg-4 pt-5 pb-3">
        <div class="card mx-auto" style="max-width:400px">
            <div class="mb-0" style="height:290px;overflow:hidden;">
                <img alt="Demo" class="img-fluid rounded-top" src="https://i.imgur.com/6ACkJFf.png"
                     style="vertical-align:middle;min-height:100%">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <div align="center">
                    <div class="col-6">
                        <a class="btn btn-outline-secondary" style="color:#ffffff"
                           :href="repository">
                            <i class="fab fa-gitlab"/> GitLab
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GitLabProject",
    props: {
        name: String,
        description: String,
        repository: URL
    }
}
</script>
