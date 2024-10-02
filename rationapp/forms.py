from django import forms
from .models import ration

class bas_inf_ration(forms.ModelForm):
    name = forms.CharField(max_length=60, widget=forms.TextInput(attrs={'name': 'ration-name'}))
    organization = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'name': 'organisation-name'}))
    description = forms.CharField(max_length=1500, widget=forms.TextInput(attrs={'name': 'Ration-textarea'}))
    date = forms.DateField(widget=forms.TextInput(attrs={'name': 'calendar-date'}))
    count_pp = forms.IntegerField(widget=forms.TextInput(attrs={'name': 'count-meal-days'}))
    count_day = forms.IntegerField(widget=forms.TextInput(attrs={'name': 'count-ration-date'}))
    technologist = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'name': 'technologist'}))
    class Meta:
        model = ration
        fields = ['name', 'organization', 'description', 'date', 'count_pp', 'count_day', 'technologist']