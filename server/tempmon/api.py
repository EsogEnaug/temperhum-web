# myapp/api.py
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource,Resource
from tastypie import fields
from tastypie.serializers import Serializer
from django.utils.timezone import is_naive

from tempmon.models import Temperature,Humidity

class MyDateSerializer(Serializer):
    """
    Our own serializer to format datetimes in ISO 8601 but with timezone
    offset.
    """
    def format_datetime(self, data):
        # If naive or rfc-2822, default behavior...
        if is_naive(data) or self.datetime_formatting == 'rfc-2822':
            return super(MyDateSerializer, self).format_datetime(data)

        return data.isoformat()

class TemperatureResource(ModelResource):
    class Meta:
        queryset = Temperature.objects.all()
        # resource_name = 'language' - defualt behaviour
        authorization = Authorization()
        serializer = MyDateSerializer()
        ordering = ['dt']
        #max_limit = 1

    #def get_object_list(self,request):
    #    return super(self, TemperatureResource).get_object_list(request).order_by('-dt')

class HumidityResource(ModelResource):
    class Meta:
        queryset = Humidity.objects.all()
        # resource_name = 'language' - defualt behaviour
        authorization = Authorization()
        serializer = MyDateSerializer()
        ordering = ['dt']

