from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("api/users/", include(("api.routers", "api"), namespace="api")),
    path("api/assessment/", include(("api.assessment.routers", "api "), namespace="api")),
    path("/jet",include('jet.urls','jet')),
    path('admin/', admin.site.urls)

]


