from django.urls import path
from .views import (
    TranslateCodeViewSet,
    ExplainCodeViewSet,
    CreateDocStringViewSet,
    FixCodeViewSet,
    TimeComplexityViewSet,
    MyTokenObtainPairView,
    RegisterView,
)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path(
        "translate-code/",
        TranslateCodeViewSet.as_view({"post": "create"}),
        name="translate-code",
    ),
    path(
        "explain-code/",
        ExplainCodeViewSet.as_view({"post": "create"}),
        name="explain-code",
    ),
    path(
        "create-docstring/",
        CreateDocStringViewSet.as_view({"post": "create"}),
        name="create-docstring",
    ),
    path(
        "fix-code/",
        FixCodeViewSet.as_view({"post": "create"}),
        name="fix-code",
    ),
    path(
        "time-complexity/",
        TimeComplexityViewSet.as_view({"post": "create"}),
        name="time-complexity",
    ),
    path("token/", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", RegisterView.as_view(), name="auth_register"),
]
