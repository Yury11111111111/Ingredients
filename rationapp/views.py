from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import ration, composition

form_ration_name = None

def glav_techn_func(request):
    rations = ration.objects.all()
    compositions = composition.objects.all()
    return render(request, 'rationapp/glav_techn.html', context={'rations':rations, 'compositions':compositions})

def bas_inf_about_ration_func(request):
    rations = ration.objects.all()
    return render(request, 'rationapp/bas_inf_about_ration.html', context={'rations':rations})

def restrictions_func(request):
    if request.method == 'POST':
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        rations = ration.objects.last()
        new_id = rations.id_ration + 1
        if request.method == 'POST':
            general_obj = ration(
                id_ration = new_id,
                name = request.POST.get('ration-name'),
                organization = request.POST.get('organisation-name'),
                description = request.POST.get('Ration-textarea'),
                date = request.POST.get('calendar-date'),
                count_pp = request.POST.get('count-meal-days'),
                count_day = request.POST.get('count-ration-date'),
                technologist = request.POST.get('technologist')
            )
            general_obj.save()
            return render(request,'rationapp/restrictions.html', context={"form_ration_name":form_ration_name})
        else:
            return redirect('/ration')

def medical_restrictions_func(request):
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        return render(request,'rationapp/medical_restrictions.html', context={"form_ration_name":form_ration_name})

def religion_restrictions_func(request):
        form_ration_name = request.POST.get('ration-name')
        request.session['ration-name'] = form_ration_name
        return render(request,'rationapp/religion_restrictions.html', context={"form_ration_name":form_ration_name})

def ingredient_restructions_func(request):
        form_ration_name = request.session['ration-name']
        return render(request,'rationapp/ingredient_restructions.html', context={"form_ration_name":form_ration_name})

def sozdanie_ration_func(request):
    form_ration_name = request.session['ration-name']
    return render(request,'rationapp/sozdanie_ration.html',context={"form_ration_name":form_ration_name})

def sozdanie_pk_func(request):
    if request.method == 'GET':
        return render(request,'rationapp/sozdanie_pk.html')

def sozdanie_ration_for_pk_func(request):
    return render(request,'rationapp/sozdanie_ration_for_pk.html')


def entrance_func(request):
    return render(request,'rationapp/entrance.html')

def glav_manager_func(request):
    return render(request,'rationapp/glav_manager.html')

def redact_ration_func(request):
    return render(request,'rationapp/redact_ration.html')

def sozdanie_ogranich_po_ingred_func(request):
    return render(request,'rationapp/sozdanie_ogranich_po_ingred.html')


def vhod_func(request):
    return render(request,'rationapp/vhod.html')

def arhiv_func(request):
    return render(request,'rationapp/arhiv.html')

def arhiv_koncretnogo_techn_func(request):
    return render(request,'rationapp/arhiv_koncretnogo_techn.html')

def log_dev_func(request):
    return render(request,'rationapp/log_dev.html')

def registration_func(request):
    return render(request,'rationapp/registration.html')

def redact_diet_func(request):
    return render(request,'rationapp/redact_diet.html')

def redact_ration_m_func(request):
    return render(request,'rationapp/redact_ration_m.html')

def prosmotr_vseh_ogr_func(request):
    return render(request,'rationapp/prosmotr_vseh_ogr.html')

def sozdanie_medical_ogranich_func(request):
    return render(request,'rationapp/sozdanie_medical_ogranich.html')

def sozdanie_religion_ogranich_func(request):
    return render(request,'rationapp/sozdanie_religion_ogranich.html')

def sozdanie_ingredient_ogranich_func(request):
    return render(request,'rationapp/sozdanie_ingredient_ogranich.html')