from . import utils
from rest_framework import viewsets
from rest_framework.response import Response
from .models import (
    TranslatedCode,
    CodeExplanation,
    PythonDocString,
    FixedCode,
    TimeComplexity,
)
from .serializers import (
    TranslatedCodeSerializer,
    CodeExplanationSerializer,
    PythonDocStringSerializer,
    FixedCodeSerializer,
    TimeComplexitySerializer,
    MyTokenObtainPairSerializer,
    RegisterSerializer,
)

from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class TranslateCodeViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = TranslatedCodeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            from_language = serializer.validated_data.get("from_language")
            to_language = serializer.validated_data.get("to_language")
            code_snippet = serializer.validated_data.get("code_snippet")

        if TranslatedCode.objects.filter(
            from_language=from_language,
            to_language=to_language,
            code_snippet=code_snippet,
        ).exists():
            # get the object from the database where to_language, from_language, and code_snippet match, if there are multiple, get the first one
            obj = TranslatedCode.objects.filter(
                from_language=from_language,
                to_language=to_language,
                code_snippet=code_snippet,
            ).first()

            translated_code = obj.output

            return Response(translated_code)

        output = utils.translate_code(
            from_language, to_language, code_snippet
        ).strip("\n")
        serializer.save(
            output=output,
        )

        return Response(output)


class ExplainCodeViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = CodeExplanationSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            code_snippet = serializer.validated_data.get("code_snippet")

        if CodeExplanation.objects.filter(code_snippet=code_snippet).exists():
            # get the object from the database where code_snippet matches, if there are multiple, get the first one
            obj = CodeExplanation.objects.filter(
                code_snippet=code_snippet
            ).first()

            explanation = obj.explanation

            return Response(explanation)

        explanation = utils.explain_code(code_snippet)
        serializer.save(
            explanation=explanation,
        )

        return Response(explanation)


class CreateDocStringViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = PythonDocStringSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            code_snippet = serializer.validated_data.get("code_snippet")

        if PythonDocString.objects.filter(code_snippet=code_snippet).exists():
            # get the object from the database where code_snippet matches, if there are multiple, get the first one
            obj = PythonDocString.objects.filter(
                code_snippet=code_snippet
            ).first()

            docstring = obj.docstring

            return Response(docstring)

        docstring = utils.create_docstring(code_snippet)
        serializer.save(
            docstring=docstring,
        )

        return Response(docstring)


class FixCodeViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = FixedCodeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            code_snippet = serializer.validated_data.get("code_snippet")
            language = serializer.validated_data.get("language")

        if FixedCode.objects.filter(
            code_snippet=code_snippet,
        ).exists():
            obj = FixedCode.objects.filter(
                code_snippet=code_snippet,
            ).first()

            fixed_code = obj.fixed_code

            return Response(fixed_code)

        fixed_code = utils.fix_code(code_snippet, language).strip("\n")

        serializer.save(
            fixed_code=fixed_code,
        )

        return Response(fixed_code)


class TimeComplexityViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = TimeComplexitySerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            code_snippet = serializer.validated_data.get("code_snippet")

        if TimeComplexity.objects.filter(code_snippet=code_snippet).exists():
            # get the object from the database where code_snippet matches, if there are multiple, get the first one
            obj = TimeComplexity.objects.filter(
                code_snippet=code_snippet
            ).first()

            time_complexity = obj.time_complexity

            return Response(time_complexity)

        time_complexity = utils.get_time_complexity(code_snippet)
        print(time_complexity)

        serializer.save(
            time_complexity=time_complexity,
        )

        return Response(time_complexity)
