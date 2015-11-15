from django.conf.urls import patterns, include, url
from django.contrib import admin
from tastypie.api import Api
from tempmon.api import TemperatureResource,HumidityResource

v1_api = Api(api_name='v1')
v1_api.register(TemperatureResource())
v1_api.register(HumidityResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'server.views.home', name='home'),
    #url(r'^easy/', include('easy.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(v1_api.urls)),
)
