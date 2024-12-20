"""
URL configuration for ration_of_nutrition project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rationapp.views import vhod_func,arhiv_func,arhiv_koncretnogo_techn_func, glav_techn_func,bas_inf_about_ration_func,restrictions_func,medical_restrictions_func,religion_restrictions_func,ingredient_restructions_func,sozdanie_ration_func,sozdanie_pk_func,sozdanie_ration_for_pk_func,redact_ration_func

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vhod_func),
    path('vhod', vhod_func),
    path('arhiv', arhiv_func),
    path('main/arhiv', arhiv_func),
    path('arhiv_koncretnogo_techn', arhiv_koncretnogo_techn_func),
    path('ration', bas_inf_about_ration_func),
    path('ration/restrictions', restrictions_func),
    path('ration/restrictions/medical_restrictions', medical_restrictions_func),
    path('ration/restrictions/religion_restrictions', religion_restrictions_func),
    path('ration/restrictions/ingredient_restructions', ingredient_restructions_func),
    path('ration/restrictions/table', sozdanie_ration_func),
    path('pk',sozdanie_pk_func, name="sozdanie_pk_func"),
    #path('pk/table', sozdanie_ration_for_pk_func),    
    path('maint', glav_techn_func),

]