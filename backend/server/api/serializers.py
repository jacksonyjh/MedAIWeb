from rest_framework import serializers
from .models import PatientDemographics, TestDemographics, RestingECG

class PatientDemographicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDemographics
        fields = "__all__"

class TestDemographicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestDemographics
        fields = "__all__"

class RestingECGSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestingECG
        fields = "__all__"