# yourappname/serializers.py
from rest_framework import serializers
from .models import User

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'friends']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        user = User.objects.filter(email=email).first()

        if user and user.check_password(password):
            data['user'] = user
            return data

        raise serializers.ValidationError('Invalid credentials')
