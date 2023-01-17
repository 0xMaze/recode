from rest_framework import serializers
from .models import (
    TranslatedCode,
    CodeExplanation,
    PythonDocString,
    FixedCode,
    TimeComplexity,
)
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token["username"] = user.username
        token["email"] = user.email
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("username", "password", "password2")

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )

        return attrs

    def create(self, validated_data):
        user = User.objects.create(username=validated_data["username"])

        user.set_password(validated_data["password"])
        user.save()

        return user


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


class TimeComplexitySerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeComplexity
        fields = [
            "code_snippet",
        ]
