from django.contrib import admin
from rationapp.models import general, ration, composition, ingredients, ing_pc, ing_pp, limit, pc, people, pp

# Register your models here.
admin.site.register(general)
admin.site.register(ration)
admin.site.register(composition)
admin.site.register(ingredients)
admin.site.register(ing_pc)
admin.site.register(ing_pp)
admin.site.register(limit)
admin.site.register(pc)
admin.site.register(people)
admin.site.register(pp)