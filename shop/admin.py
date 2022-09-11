from django.contrib import admin
from .models import Category,Product

class CategoryAdmin(admin.ModelAdmin):
    list_display    = [ "dt","name" ]

class ProductAdmin(admin.ModelAdmin):
    list_display    = [ "dt","name","category","price","release" ]

admin.site.register(Category,CategoryAdmin)
admin.site.register(Product,ProductAdmin)

