# Generated by Django 5.0.8 on 2024-08-31 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peliculas', '0002_pelicula_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pelicula',
            name='poster',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
