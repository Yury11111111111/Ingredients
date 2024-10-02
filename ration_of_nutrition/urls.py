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
from rationapp.views import sozdanie_medical_ogranich_func,sozdanie_religion_ogranich_func,sozdanie_ingredient_ogranich_func, prosmotr_vseh_ogr_func,vhod_func,arhiv_func,arhiv_koncretnogo_techn_func,log_dev_func,registration_func,redact_diet_func,redact_ration_m_func,  glav_techn_func,bas_inf_about_ration_func,restrictions_func,medical_restrictions_func,religion_restrictions_func,ingredient_restructions_func,sozdanie_ration_func,sozdanie_pk_func,sozdanie_ration_for_pk_func,entrance_func,glav_manager_func,redact_ration_func,sozdanie_ogranich_po_ingred_func

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vhod_func),
    path('ration', bas_inf_about_ration_func),
    path('ration/restrictions', restrictions_func),
    path('ration/restrictions/medical_restrictions', medical_restrictions_func),
    path('ration/restrictions/religion_restrictions', religion_restrictions_func),
    path('ration/restrictions/ingredient_restructions', ingredient_restructions_func),
    path('ration/restrictions/table', sozdanie_ration_func),
    path('pk',sozdanie_pk_func, name="sozdanie_pk_func"),
    path('pk/table', sozdanie_ration_for_pk_func),
    path('entrance', entrance_func),
    path('main', glav_manager_func),
    path('main/ration', redact_ration_m_func),
    path('main/ration/restrictions', sozdanie_ogranich_po_ingred_func),
    path('main/prosmotr_vseh_ogr', prosmotr_vseh_ogr_func),
    path('main/redact_diet', redact_diet_func),

    path('vhod', vhod_func),
    path('arhiv', arhiv_func),
    path('main/arhiv', arhiv_func),
    path('arhiv_koncretnogo_techn', arhiv_koncretnogo_techn_func),
    path('main/log_dev', log_dev_func),
    path('log_dev', log_dev_func),
    path('registration', registration_func),
    path('redact_diet', redact_diet_func),
    path('redact_ration_m', redact_ration_m_func),
    path('prosmotr_vseh_ogr', prosmotr_vseh_ogr_func),
    path('main/medical_restrictions', medical_restrictions_func),
    path('religion_restrictions', religion_restrictions_func),
    path('main/ingredient_restructions', ingredient_restructions_func),
    path('main/sozdanie_medical_ogranich', sozdanie_medical_ogranich_func),
    path('main/sozdanie_religion_ogranich', sozdanie_religion_ogranich_func),
    path('main/sozdanie_ingredient_ogranich', sozdanie_ingredient_ogranich_func),

    path('maint', glav_techn_func),

]
