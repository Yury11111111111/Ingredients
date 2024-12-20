from django.shortcuts import render, redirect
from django.http import JsonResponse
from rationapp.models import ration,general,ingredients, composition
import random
import string
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
    generals = general.objects.all().prefetch_related("ingredients")
    ingredient = ingredients.objects.all()
    context={
        "generals":generals,
        "ingredients":ingredient
    }
    if request.method == 'GET':
        return render(request,'rationapp/sozdanie_pk.html', context)
    elif request.method == 'POST':
        ings = request.POST.get('ingredient_list', '').replace(' гр.','')
        ingredient_list = [item.split(';') for item in ings.split('|')]

        characters = string.ascii_letters + string.digits
        unique_string = ''.join(random.choice(characters) for ch in range(12))
        
        while composition.objects.filter(code=unique_string).exists():
            unique_string = ''.join(random.choice(characters) for ch in range(12))
        comp = composition()
        comp.code = unique_string
        comp.name = request.POST.get("name_pc")
        comp.description = request.POST.get("description_pc")
        comp.save()

    return render(request,'rationapp/sozdanie_pk.html', context) #доработать обработку ошибок

def sozdanie_ration_for_pk_func(request):
    return render(request,'rationapp/sozdanie_ration_for_pk.html')

def redact_ration_func(request):
    return render(request,'rationapp/redact_ration.html')

def vhod_func(request):
    return render(request,'rationapp/vhod.html')

def arhiv_func(request):
    return render(request,'rationapp/arhiv.html')

def arhiv_koncretnogo_techn_func(request):
    return render(request,'rationapp/arhiv_koncretnogo_techn.html')