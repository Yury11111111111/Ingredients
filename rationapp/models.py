from django.db import models

class general(models.Model):
    id = models.IntegerField(primary_key=True)
    code = models.CharField(max_length=255, default=None)
    name = models.CharField(max_length=255, default=None)
    parent = models.CharField(max_length=255, default=None)
    flag_pc = models.IntegerField(default=None)

class ration(models.Model):
    id_ration = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=60)
    organization = models.CharField(max_length=100)
    description = models.CharField(max_length=1500)
    date = models.DateField()
    count_pp = models.IntegerField()
    count_day = models.IntegerField()
    technologist = models.CharField(max_length=100)
    done = models.IntegerField(default=0)
    archive = models.IntegerField(default=0)

class composition(models.Model):
    code = models.CharField(max_length=12, primary_key=True)
    description = models.CharField(max_length=1000)

class ingredients(models.Model):
    code = models.CharField(max_length=12, primary_key=True)
    weight = models.FloatField()
    water = models.FloatField()
    protein = models.FloatField()
    fat = models.FloatField()
    nlc = models.FloatField()
    chol = models.FloatField()
    mds = models.FloatField()
    kr = models.FloatField()
    carb = models.FloatField()
    pv = models.FloatField()
    ok = models.FloatField()
    ash = models.FloatField()
    na = models.FloatField()
    k = models.FloatField()
    ca = models.FloatField()
    mg = models.FloatField()
    p = models.FloatField()
    fe = models.FloatField()
    a = models.FloatField()
    kar = models.FloatField()
    re = models.FloatField()
    te = models.FloatField()
    b1 = models.FloatField()
    b2 = models.FloatField()
    pp = models.FloatField()
    ne = models.FloatField()
    c = models.FloatField()
    ec = models.FloatField()

class ing_pc(models.Model):
    code_ing = models.CharField(max_length=12, primary_key=True)
    code_pc = models.CharField(max_length=12)
    weight = models.FloatField()

class ing_pp(models.Model):
    id_1 = models.IntegerField(primary_key=True)
    id_pp = models.IntegerField()
    code = models.CharField(max_length=12)
    weight = models.FloatField()

class limit(models.Model):
    code = models.CharField(max_length=12, primary_key=True)
    id_ration = models.IntegerField()

class pc(models.Model):
    code = models.CharField(max_length=12, primary_key=True)
    description = models.CharField(max_length=1000)

class people(models.Model):
    id_people = models.IntegerField(primary_key=True)
    fio = models.CharField(max_length=100)
    role = models.CharField(max_length=20)
    position = models.CharField(max_length=100)
    email = models.CharField(max_length=90)
    phone = models.CharField(max_length=20)

class pp(models.Model):
    id_pp = models.IntegerField(primary_key=True)
    id_ration = models.IntegerField()
    name = models.CharField(max_length=60)