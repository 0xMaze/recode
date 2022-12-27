from rest_framework import serializers
from .models import TranslatedCode, CodeExplanation, PythonDocString, FixedCode


class CodeExplanationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeExplanation
        fields = [
            "code_snippet",
        ]


class TranslatedCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TranslatedCode
        fields = [
            "from_language",
            "to_language",
            "code_snippet",
        ]


class PythonDocStringSerializer(serializers.ModelSerializer):
    class Meta:
        model = PythonDocString
        fields = [
            "code_snippet",
        ]


class FixedCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FixedCode
        fields = [
            "code_snippet",
            "language",
        ]
