# Generated by Django 5.1 on 2024-08-10 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="name",
            field=models.CharField(max_length=33),
        ),
    ]
