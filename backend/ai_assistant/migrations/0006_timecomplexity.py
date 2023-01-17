# Generated by Django 4.1.4 on 2022-12-31 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ai_assistant", "0005_alter_fixedcode_fixed_code"),
    ]

    operations = [
        migrations.CreateModel(
            name="TimeComplexity",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("code_snippet", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]