from django.urls import path
from .views import (
    TranslateCodeViewSet,
    ExplainCodeViewSet,
    CreateDocStringViewSet,
    FixCodeViewSet,
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
]
