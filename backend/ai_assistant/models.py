from django.db import models


class TranslatedCode(models.Model):
    from_language = models.CharField(max_length=50)
    to_language = models.CharField(max_length=50)
    code_snippet = models.TextField()
    output = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.code_snippet}\n -> \n{self.output}"


class CodeExplanation(models.Model):
    code_snippet = models.TextField()
    explanation = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.code_snippet}\n -> \n{self.explanation}"


class PythonDocString(models.Model):
    code_snippet = models.TextField()
    docstring = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.code_snippet}\n -> \n{self.docstring}"


class FixedCode(models.Model):
    code_snippet = models.TextField()
    language = models.CharField(max_length=50)
    fixed_code = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class TimeComplexity(models.Model):
    code_snippet = models.TextField()
    time_complexity = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
